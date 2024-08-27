import axios from "axios";

interface Data {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: [];
}
export const fetchFeedbacks = async (url: string) => {
  try {
    const response = await axios.get(url);
    const data: Data[] = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
