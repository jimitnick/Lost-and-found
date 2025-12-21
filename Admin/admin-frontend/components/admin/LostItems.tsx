"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

type ClaimedBy = {
  email: string;
  user_id: string;
};

type LostItem = {
  item_id: string;
  item_name: string;
  description: string;
  location_lost: string;
  date_lost: string;
  reported_by_name: string;
  reported_by_roll: string | null;
  created_post: string;
  image_url: string;
  claimed_by: ClaimedBy | null;
};

const LostItems: React.FC = () => {
  const [lostItems, setLostItems] = useState<LostItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const response = await axios.get("/api/admin/items/list", {
          withCredentials: true,
        });

        setLostItems(response.data);
      } catch (error) {
        console.error("Failed to fetch lost items", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLostItems();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {lostItems
          .filter((item) => item.claimed_by === null)
          .map((item) => (
            <div key={item.item_id} className="border rounded-lg p-4 min-w-[220px] shadow-sm">
              <img src={item.image_url} alt={item.item_name} className="w-32 object-cover" />
              <p><b>Item:</b> {item.item_name}</p>
              <p><b>Description:</b> {item.description}</p>
              <p><b>Location:</b> {item.location_lost}</p>
              <p><b>Date:</b> {item.date_lost}</p>
              <p><b>Reported By:</b> {item.reported_by_name}</p>
            </div>
          ))}
      </div>

      <div className="mt-8">
        <h2 className="font-semibold mb-4">Claimed Items</h2>

        <div className="flex flex-wrap gap-4">
          {lostItems
            .filter((item) => item.claimed_by !== null)
            .map((item) => (
              <div key={item.item_id} className="border rounded-lg p-4 min-w-[220px] shadow-sm">
                <img src={item.image_url} alt={item.item_name} className="w-32 object-cover" />
                <p><b>Item:</b> {item.item_name}</p>
                <p><b>Claimed By:</b> {item.claimed_by?.email}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default LostItems;
