"use client";
import BaseButton from "@/app/Atoms/BaseButton/BaseButton";
import PostDesc from "@/app/Atoms/PostDesc/PostDesc";
import PostTitle from "@/app/Atoms/PostTitle/PostTitle";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { PostProps } from "./post.type";
import Link from "next/link";
import { posts } from "../../constants";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Post = ({ title, desc, id }: PostProps) => {
  const [arrayOfObjects, setArrayOfObjects] = useState(posts);
  const deleteItem = (itemId: number) => {
    const updatedArray = arrayOfObjects.filter((item) => item.id !== itemId);
    setArrayOfObjects(updatedArray);
  };
  console.log(arrayOfObjects);
  return (
    <>
      <Box>
        <Card sx={{ maxWidth: 500, mb: "30px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <PostTitle title={title} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <PostDesc description={desc} />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link
                style={{ textDecoration: "none", color: "green" }}
                href={`post/${id}/edit`}
              >
                Edit
              </Link>
            </Button>
            <Button size="small">
              <Link
                style={{ textDecoration: "none", color: "blue" }}
                href={`post/${id}`}
              >
                Show
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Box></Box>
    </>
  );
};

export default Post;
