(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_admin_LostItems_tsx_e45e79ed._.js", {

"[project]/components/admin/LostItems.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://etdewmgrpvoavevlpibg.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0ZGV3bWdycHZvYXZldmxwaWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MjM4NTcsImV4cCI6MjA2OTI5OTg1N30.F6kD0t-VcM_HVh_v7sL35v1xsNi7BIITRiyt1Yy6Hu0");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
const LostItems = ()=>{
    _s();
    const [lostItems, setLostItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LostItems.useEffect": ()=>{
            const fetchLostItems = {
                "LostItems.useEffect.fetchLostItems": async ()=>{
                    const { data, error } = await supabase.from('Lost_items').select('item_id, item_name, description, location_lost, date_lost, reported_by_name, reported_by_roll, created_post, image_url,claimed_by');
                    if (!error && data) {
                        setLostItems(data);
                        console.log(data);
                    }
                    setLoading(false);
                }
            }["LostItems.useEffect.fetchLostItems"];
            fetchLostItems();
        }
    }["LostItems.useEffect"], []);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/components/admin/LostItems.tsx",
        lineNumber: 40,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px'
                },
                children: lostItems.map((item)=>item.claimed_by === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '16px',
                            minWidth: '220px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.image_url,
                                alt: item.item_name,
                                className: "object-cover w-32 flex items-center justify-center"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/LostItems.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-md font-bold",
                                children: [
                                    "Item Name: ",
                                    item.item_name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/LostItems.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-md font-bold",
                                children: [
                                    "Description: ",
                                    item.description
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/LostItems.tsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-md font-bold",
                                children: [
                                    "Location Lost: ",
                                    item.location_lost
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/LostItems.tsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-md font-bold",
                                children: [
                                    "Date Lost: ",
                                    item.date_lost
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/LostItems.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-md font-bold",
                                children: [
                                    "Reported By: ",
                                    item.reported_by_name,
                                    " (",
                                    item.reported_by_roll ? item.reported_by_roll : 'Unknown',
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/LostItems.tsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-md font-bold",
                                children: [
                                    "Created Post: ",
                                    item.created_post
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/LostItems.tsx",
                                lineNumber: 63,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-md font-bold",
                                children: [
                                    "Claimed By: ",
                                    item.claimed_by ? item.claimed_by['email'] : 'Unknown'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/LostItems.tsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this)
                        ]
                    }, item.item_id, true, {
                        fileName: "[project]/components/admin/LostItems.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/admin/LostItems.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-semibold mt-8 mb-4 flex gap-4 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full border-1 flex gap-4 items-center justify-center h-20 border-zinc-900 p-2 rounded-xl mb-6 bg-gray-300",
                        children: "Claimed Items"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/LostItems.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this),
                    lostItems.map((item)=>item.claimed_by != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                padding: '16px',
                                minWidth: '220px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                width: '500px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.image_url,
                                    alt: item.item_name,
                                    className: "object-cover w-32 flex items-center justify-center"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/LostItems.tsx",
                                    lineNumber: 83,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-md font-bold",
                                    children: [
                                        "Item Name: ",
                                        item.item_name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/LostItems.tsx",
                                    lineNumber: 84,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-md font-bold",
                                    children: [
                                        "Description: ",
                                        item.description
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/LostItems.tsx",
                                    lineNumber: 85,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-md font-bold",
                                    children: [
                                        "Location Lost: ",
                                        item.location_lost
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/LostItems.tsx",
                                    lineNumber: 86,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-md font-bold",
                                    children: [
                                        "Date Lost: ",
                                        item.date_lost
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/LostItems.tsx",
                                    lineNumber: 87,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-md font-bold",
                                    children: [
                                        "Reported By: ",
                                        item.reported_by_name,
                                        " (",
                                        item.reported_by_roll ? item.reported_by_roll : 'Unknown',
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/LostItems.tsx",
                                    lineNumber: 88,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-md font-bold",
                                    children: [
                                        "Created Post: ",
                                        item.created_post
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/LostItems.tsx",
                                    lineNumber: 89,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-md font-bold",
                                    children: [
                                        "Claimed By: ",
                                        item.claimed_by ? item.claimed_by['email'] : 'Unknown'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/LostItems.tsx",
                                    lineNumber: 90,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, item.item_id, true, {
                            fileName: "[project]/components/admin/LostItems.tsx",
                            lineNumber: 72,
                            columnNumber: 17
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/LostItems.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(LostItems, "ztGX09kyrCebredxaSbC+x4YTEc=");
_c = LostItems;
const __TURBOPACK__default__export__ = LostItems;
var _c;
__turbopack_context__.k.register(_c, "LostItems");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_admin_LostItems_tsx_e45e79ed._.js.map