import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

interface Post {
  id: number;
  category: string;
  title: string;
  description: string;
  content: string;
  image_path?: string | null;
  created_at: string;
}

export default function Manage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeTab, setActiveTab] = useState<string>("All");

  const [newPost, setNewPost] = useState({
    category: "",
    title: "",
    description: "",
    content: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editPostData, setEditPostData] = useState({
    category: "",
    title: "",
    description: "",
    content: "",
  });
  const [editImageFile, setEditImageFile] = useState<File | null>(null);

  const API_URL = "http://localhost:5002/posts";

  const fetchPosts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setImageFile(e.target.files[0]);
  };
  const handleEditImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setEditImageFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!newPost.title || !newPost.category || !newPost.content) return alert("Title, category, and content are required!");
    const formData = new FormData();
    formData.append("category", newPost.category);
    formData.append("title", newPost.title);
    formData.append("description", newPost.description);
    formData.append("content", newPost.content);
    if (imageFile) formData.append("image", imageFile);
    try {
      const res = await fetch(API_URL, { method: "POST", body: formData });
      if (res.ok) {
        setNewPost({ category: "", title: "", description: "", content: "" });
        setImageFile(null);
        fetchPosts();
        setActiveTab("All");
      } else {
        const error = await res.json();
        alert(error.error || "Failed to create post");
      }
    } catch (err) { console.error(err); alert("Error submitting post"); }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (res.ok) fetchPosts();
      else {
        const error = await res.json();
        alert(error.error || "Failed to delete post");
      }
    } catch (err) { console.error(err); alert("Error deleting post"); }
  };

  const startEdit = (post: Post) => {
    setEditingPostId(post.id);
    setEditPostData({ category: post.category, title: post.title, description: post.description, content: post.content });
    setEditImageFile(null);
  };
  const cancelEdit = () => {
    setEditingPostId(null);
    setEditPostData({ category: "", title: "", description: "", content: "" });
    setEditImageFile(null);
  };
  const handleEditSubmit = async () => {
    if (!editPostData.title || !editPostData.category || !editPostData.content) return alert("Title, category, and content are required!");
    if (editingPostId === null) return;
    const formData = new FormData();
    formData.append("category", editPostData.category);
    formData.append("title", editPostData.title);
    formData.append("description", editPostData.description);
    formData.append("content", editPostData.content);
    if (editImageFile) formData.append("image", editImageFile);
    try {
      const res = await fetch(`${API_URL}/${editingPostId}`, { method: "PUT", body: formData });
      if (res.ok) { fetchPosts(); cancelEdit(); }
      else { const error = await res.json(); alert(error.error || "Failed to update post"); }
    } catch (err) { console.error(err); alert("Error updating post"); }
  };

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const filteredPosts = activeTab === "All" ? posts : posts.filter(p => p.category === activeTab);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-serif font-semibold">Manage Content</h1>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex gap-2 border-b border-border pb-2">
          {categories.map(cat => (
            <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Posts List */}
<div className="space-y-10 w-full">
  {filteredPosts.map((post, index) => (
    <div
      key={post.id}
      className="relative flex flex-col md:flex-row items-start bg-card/40 rounded-xl p-6 md:p-8 gap-6 border border-border hover:shadow-md transition-shadow duration-300 opacity-0 animate-fade-in-up"
      style={{
        animationDelay: `${0.3 + index * 0.12}s`,
        animationDuration: "0.35s",
        animationFillMode: "forwards",
      }}
    >
      {/* Image */}
      <div className="w-full md:w-36 h-36 bg-muted rounded-md flex-shrink-0 overflow-hidden flex items-center justify-center">
        {post.image_path ? (
          <img
            src={`http://localhost:5002/${post.image_path}`}
            alt={post.title}
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <span className="text-xs text-foreground/50">No Image</span>
        )}
      </div>

      {/* Text Content / Editing Form */}
      <div className="flex-1 flex flex-col">
        {editingPostId === post.id ? (
          <div className="space-y-3 w-full">
            <Input
              placeholder="Title"
              value={editPostData.title}
              onChange={(e) => setEditPostData({ ...editPostData, title: e.target.value })}
            />
            <Input
              placeholder="Category"
              value={editPostData.category}
              onChange={(e) => setEditPostData({ ...editPostData, category: e.target.value })}
            />
            <Input
              placeholder="Description"
              value={editPostData.description}
              onChange={(e) => setEditPostData({ ...editPostData, description: e.target.value })}
            />
            <Textarea
              placeholder="Content"
              value={editPostData.content}
              onChange={(e) => setEditPostData({ ...editPostData, content: e.target.value })}
            />
            <Input type="file" accept="image/*" onChange={handleEditImageChange} />
            <div className="flex gap-2 mt-2">
              <Button size="sm" onClick={handleEditSubmit}>Save</Button>
              <Button size="sm" variant="secondary" onClick={cancelEdit}>Cancel</Button>
            </div>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-serif font-semibold">{post.title}</h3>
            <p className="text-sm text-foreground/60 mt-1">
              {new Date(post.created_at).toLocaleDateString()} • {post.category}
            </p>
            <p className="text-foreground text-base mt-3 leading-relaxed max-w-2xl">
              {post.description}
            </p>
            <p className="text-foreground/80 mt-2">{post.content}</p>

            {/* Edit/Delete Buttons */}
            <div className="flex gap-2 mt-4">
              <Button size="sm" onClick={() => startEdit(post)}>Edit</Button>
              <Button size="sm" variant="destructive" onClick={() => handleDelete(post.id)}>Delete</Button>
            </div>
          </>
        )}
      </div>
    </div>
  ))}
</div>

      {/* New Post Form */}
      <Card className="bg-card/60 border border-border">
        <CardHeader>
          <CardTitle>Add New Post</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Title" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} />
            <Input placeholder="Category" value={newPost.category} onChange={e => setNewPost({...newPost, category: e.target.value})} />
          </div>
          <Input placeholder="Description" value={newPost.description} onChange={e => setNewPost({...newPost, description: e.target.value})} />
          <Textarea placeholder="Content" value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} />
          <Input type="file" accept="image/*" onChange={handleImageChange} />
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}