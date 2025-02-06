import { NextResponse } from "next/server"

export const blogs = [
    {
        "id": "6",
        "title": "Cybersecurity in the Digital Age",
        "description": "Navigate the evolving landscape of cybersecurity and the critical role it plays in safeguarding digital assets. From advanced threat detection to ethical hacking, this blog examines the strategies and technologies shaping the future of online security.",
        "publish_date": "2025-03-06",
        "author_name": "Mehedi Imun Anik",
        "blog_image": "https://startnearshoring.com/wp-content/uploads/2023/07/The_Growing_Importance_of_Cybersecurity.jpg",
        "total_likes": "950"
    },
    {
        "id": "8a53",
        "title": "What is server component",
        "author_name": "Emam Bokhari",
        "publish_date": "2025-02-05",
        "total_likes": "7",
        "blog_image": "https://placehold.co*300",
        "description": "Server component "
    }
]

export const GET = async () => {
    return NextResponse.json(blogs)
}