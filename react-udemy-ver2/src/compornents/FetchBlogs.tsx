import {supabase} from '../lib/supabaseClient'

export const FetchBlogs =  async () => {
  const { data, error } = await supabase
  .from('blog') // テーブル名
  .select('*'); // 全カラムを取得
  if (error) {
    console.error('Error fetching blogs:', error.message);
    return [];
  }
  console.log(data);
  return data;
  // return (
  //   <>
  //   {data.map((blog) => (
  //     <div key={blog.id}>
  //       <p>{blog.id}</p>
  //       <p>{blog.title}</p>
  //     </div>
  //   ))}
  //   </>
  // )
}

