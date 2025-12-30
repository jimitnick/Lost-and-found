import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import * as bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        // Initialize Supabase Admin Client
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

        if (!supabaseUrl || !supabaseKey) {
            return NextResponse.json({ error: "Server misconfiguration: Missing Supabase URL or Key" }, { status: 500 });
        }

        const supabase = createClient(supabaseUrl, supabaseKey);

        const body = await req.json();
        const { email, password } = body;

        // Basic Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

        if (!email || !emailRegex.test(email)) {
            return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
        }
        if (!password || !passwordRegex.test(password)) {
            return NextResponse.json({
                error: "Password must be ≥8 chars and include a number and a special character"
            }, { status: 400 });
        }

        // 1. Create User in Supabase Auth (Critical for Login)
        const { data: authData, error: authError } = await supabase.auth.admin.createUser({
            email,
            password,
            email_confirm: true // Auto-confirm for now to match legacy experience
        });

        if (authError) {
            console.error("Auth Signup Error:", authError);
            return NextResponse.json({ error: authError.message }, { status: 400 });
        }

        // 2. Insert into custom Users table (For Admin Dashboard)
        // Hash Password for legacy table consistency
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const { error: insertError } = await supabase
            .from("Users")
            .insert([{
                email,
                password: hashedPassword,
                // store auth_id if you want to link them later: id: authData.user.id 
            }]);

        if (insertError) {
            console.error("DB Insert Error:", insertError);
            // Ideally we should rollback auth user here, but for now just report error
            return NextResponse.json({ error: "User created in Auth but failed to save to DB: " + insertError.message }, { status: 400 });
        }

        return NextResponse.json({ message: "User created successfully" }, { status: 201 });

    } catch (err: any) {
        console.error("Signup Error:", err);
        return NextResponse.json({ error: "Server error: " + (err.message || err) }, { status: 500 });
    }
}
