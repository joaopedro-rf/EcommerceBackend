import React from "react";
import { useMutation } from "@tanstack/react-query";

export function useSignUpMutation() {
  

  const URL = `http://localhost:8080/api/users/register`;
  const postData = async (formData) => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });
      console.log("FORM DATA:", JSON.stringify(formData));
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return response.json();
    } catch (error) {
      console.error("Fetch failed:", error.message);
      throw error;
    }
  };

  const mutate = useMutation({
    mutationFn: postData,
  });

  return mutate;
}
