"use client";
import { Box, Container } from "@mui/material";
import BaseInput from "../Atoms/BaseInput/BaseInput";
import BaseTextarea from "../Atoms/BaseTextarea/BaseTextarea";
import BaseButton from "../Atoms/BaseButton/BaseButton";
import { SyntheticEvent, useContext, useState } from "react";
import { PostsContext } from "../page";
import Link from "next/link";

export default function CreatePost() {
  const newPosts = useContext(PostsContext);
  const [postTitle, setPostTitle] = useState<string | undefined>("");
  const [postDesc, setPostDesc] = useState<string | undefined>("");

  const handleCreatePost = () => {
    if (postTitle && postDesc) {
      newPosts.push({
        id: newPosts.length + 2,
        title: postTitle,
        desc: postDesc,
      });
    }
    window.confirm(`Post has been created`);
  };
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: "100px",
        }}
      >
        <h1> Create Post :</h1>
        <BaseInput
          label="Post Title"
          onChange={(e: React.SyntheticEvent) => setPostTitle((e.currentTarget as HTMLInputElement).value)}
        />
        <BaseTextarea
          label="Post Description"
          onChange={(e: React.SyntheticEvent) => setPostDesc((e.currentTarget as HTMLInputElement).value)}

        />
        <BaseButton
          label="Create"
          bgColor="green"
          handleChange={() => handleCreatePost()}
        />
        <Link
          style={{
            textDecoration: "none",
            color: "blue",
          }}
          href={"/"}
        >
          Home
        </Link>
      </Box>
    </Container>
  );
}
