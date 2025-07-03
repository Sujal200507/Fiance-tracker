"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/supabase";
import { CircularProgress, Box, Typography } from "@mui/material";

function CallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleRecovery = async () => {
      const type = searchParams.get("type");
      const access_token = searchParams.get("access_token");
      const refresh_token = searchParams.get("refresh_token");

      if (type === "recovery" && access_token && refresh_token) {
        const { error } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });
        if (error) {
          setError(error.message);
        } else {
          router.replace("/auth/new-password?recovery=1");
        }
      } else {
        setError("Invalid or missing recovery parameters.");
      }
    };
    handleRecovery();
    // eslint-disable-next-line
  }, []);

  if (error) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <Typography variant="h5" color="error" gutterBottom>
          {error}
        </Typography>
        <Typography variant="body1">Please try requesting a new password reset link.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <CircularProgress size={48} sx={{ mb: 2 }} />
      <Typography variant="h6">Processing password reset...</Typography>
    </Box>
  );
}

export default function AuthCallback() {
  return (
    <Suspense fallback={
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <CircularProgress size={48} sx={{ mb: 2 }} />
        <Typography variant="h6">Loading...</Typography>
      </Box>
    }>
      <CallbackContent />
    </Suspense>
  );
} 