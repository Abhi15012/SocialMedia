import { createContext, useReducer } from "react";

export const CreateData = createContext({
  listArr: [],
  DeletePost: () => {},
  AddPost: () => {},
});

const PostlistProvider = ({ children }) => {
  const Redfun = (ComplexData, action) => {
    let dynamicData = ComplexData;
    if (action.type === "DEL_POST") {
      dynamicData = ComplexData.filter(
        (posts) => posts.id !== action.payload.PostId
      );
    }

else if(action.type==="CREATE_POST"){
dynamicData=[action.payload,...ComplexData]

}

    return dynamicData;
  };
  const [ComplexData, dispatchPostlist] = useReducer(Redfun, DEFAULT_listDATA);

  const DeletePost = (PostId) => {
    dispatchPostlist({
      type: "DEL_POST",

      payload: {
        PostId: PostId,
      },
    });
  };

  const AddPost = (post) => {

  
 const AddtoReduce={
type:"CREATE_POST",
payload:post}
 dispatchPostlist(AddtoReduce)
  };

  return (
    <CreateData.Provider value={{ listArr: ComplexData, DeletePost, AddPost }}>
      {children}
    </CreateData.Provider>
  );
};
const DEFAULT_listDATA = [
  {
    id: "1",
    title: "Trip To Wayanad",
    body: "Iam on way to Munnar , Beauty to be see and feel",
    userid: "user-12",
    tags: ["vacation", "Nature"],
    reactions: 2,
  },
  {
    id: "4",
    title: "Got Job at Amazon",
    body: "Hardwork Pays , as a web developer ",
    userid: "user-11",
    tags: ["job", "success"],
    reactions: 23,
  },
];
export default PostlistProvider;
