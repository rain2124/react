import { Database } from '../lib/schema';
import { supabase } from '../lib/supabaseClient'
import { useState, useEffect } from 'react'

type Blog = Database["public"]["Tables"]["blog"]["Row"];

export const FetchBlogs = () => {
  const [data, setData] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('blog')
        .select('*');

      if (error) {
        console.error('Error fetching blogs:', error.message);
        return;
      }

      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {data.map((blog) => (
        <div key={blog.id}>
          <p>{blog.title}</p>
        </div>
      ))}
    </>
  );
};
