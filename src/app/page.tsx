"use client";

import { Button, Typography, Box } from "@mui/material";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "./firebaseConfig";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log(result.user); // Log the fresh value
    } catch (error) {
      console.error("Google Sign-In Error", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  console.log(user);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Login with Google
      </Typography>
      <Suspense fallback={<div>Loading...</div>}>
        {!user ? (
          <Button variant="contained" onClick={handleGoogleLogin}>
            Sign in with Google
          </Button>
        ) : (
          <Box>
            <Typography variant="h5">Welcome, {user.displayName}</Typography>
            <Typography variant="h6">Email: {user.email}</Typography>
            <Image
              src={user.photoURL}
              alt="Profile"
              width={60}
              height={60}
              unoptimized={true}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Box>
        )}
      </Suspense>
    </Box>
  );
}
