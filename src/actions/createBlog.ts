"use server"

import { redirect } from "next/navigation";



export const createBlog = async (data: FormData) => {
    const blogData = Object.fromEntries(data.entries())
    const response = await fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData)
    });;
    const blogInfo = await response.json();

    if (blogInfo) {
        redirect(`/blogs/${blogInfo.id}`)
    }

    return blogInfo;

}