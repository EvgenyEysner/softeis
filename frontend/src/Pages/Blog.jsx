// import { useEffect, useState } from 'react';
// import { Box, Typography, Card, CardContent, Link, Chip } from "@mui/material";
// import Header from "../components/Header";
// import axios from 'axios';
//
// export default function Blog() {
//   const [posts, setPosts] = useState([]);
//
//   useEffect(() => {
//     axios.get('/api/blog')
//       .then(response => setPosts(response.data))
//       .catch(error => console.error('Error fetching posts:', error));
//   }, []);
//
//   return (
//     <Box>
//       <Header />
//       <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, p: 2 }}>
//         <Typography variant="h4" gutterBottom>
//           Latest Posts
//         </Typography>
//
//         {posts.map((post) => (
//           <Card key={post.title} variant="outlined" sx={{ mb: 3 }}>
//             <CardContent>
//               <Typography variant="h6">{post.title}</Typography>
//               <Typography variant="caption" color="text.secondary">
//                 {new Date(post.date).toLocaleDateString()}
//               </Typography>
//
//               <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
//                 {post.tags?.map((tag) => (
//                   <Chip key={tag} label={tag} size="small" />
//                 ))}
//               </Box>
//
//               <Link
//                 href="#"
//                 sx={{ mt: 2, display: 'block' }}
//                 underline="hover"
//               >
//                 Read article →
//               </Link>
//             </CardContent>
//           </Card>
//         ))}
//       </Box>
//     </Box>
//   );
// }
