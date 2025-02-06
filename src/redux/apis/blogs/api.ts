import { baseApi } from "@/redux/baseApi";

const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllBlogs: builder.query({
            query: () => ({
                url: "/blogs",
                method: "GET"
            })
        })
    })
})

export const { useFetchAllBlogsQuery } = blogApi;

/*
fetchAllBlogs
fetchBlogById
updateBlogById
deleteBlogById
*/