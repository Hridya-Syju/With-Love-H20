import React, { useState } from 'react';

// CSS styles
const styles = {
  forum: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    position: 'relative', // Added for positioning the exit button
  },
  post: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  form: {
    marginBottom: '20px',
  },
  formInput: {
    marginBottom: '10px',
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
  },
  formButton: {
    padding: '8px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  exitButton: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

// Component for each individual post
const Post = ({ post }) => {
  return (
    <div style={styles.post}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Posted by: {post.user}</p>
    </div>
  );
};

// Component for the forum
const LForum = () => {
  // State to hold the list of posts
  const [posts, setPosts] = useState([
    { id: 1, title: 'First post', content: 'This is the content of the first post.', user: 'John Doe' },
    { id: 2, title: 'Second post', content: 'This is the content of the second post.', user: 'Jane Smith' },
    // Add more posts as needed
  ]);

  // State to hold form input values
  const [newPost, setNewPost] = useState({ title: '', content: '', user: '' });

  // Function to handle form submission for adding new post
  const handleAddPost = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content || !newPost.user) {
      alert('Please fill out all fields.');
      return;
    }
    const id = posts.length + 1; // Generate unique ID for the new post
    const updatedPosts = [...posts, { id, ...newPost }];
    setPosts(updatedPosts);
    setNewPost({ title: '', content: '', user: '' }); // Clear form inputs after adding post
  };

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  // Function to handle exit button click
  const handleExit = () => {
    // You can add your exit logic here
    console.log('Exiting forum...');
  };

  return (
    <div style={styles.forum}>
      <h1>Community Forum</h1>
      {/* Form to add new post */}
      <form style={styles.form} onSubmit={handleAddPost}>
        <input type="text" name="title" placeholder="Title" value={newPost.title} onChange={handleInputChange} style={styles.formInput} />
        <textarea name="content" placeholder="Content" value={newPost.content} onChange={handleInputChange} style={styles.formInput}></textarea>
        <input type="text" name="user" placeholder="Your Name" value={newPost.user} onChange={handleInputChange} style={styles.formInput} />
        <button type="submit" style={styles.formButton}>Submit</button>
      </form>
      {/* Render each post using the Post component */}
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
      {/* Clickable button */}
      <button onClick={handleExit} style={styles.exitButton}>Exit</button>
    </div>
  );
};

export default LForum;