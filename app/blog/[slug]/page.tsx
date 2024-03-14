interface Params {
    slug: string;
}

interface BlogPostPageProps {
    params: Params;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    return (
        <main>
            <h1>Blog Post</h1>
            <p>{params.slug}</p>
        </main>
    );
}
