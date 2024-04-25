import { useMutation } from "@tanstack/react-query";

export function useSignInMutation() {

  const URL = `http://54.210.75.235/api/users/login`;
  const postData = async (postData) => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return response.json();
    } catch (error) {
      console.error("Fetch failed:", error.message);
      throw error;
    }
  };

  const mutation = useMutation({
    mutationFn: postData,
    
  });
  
  const { mutate, isSuccess , data } = mutation;
  
  return { mutate, isSuccess , data  };
}
