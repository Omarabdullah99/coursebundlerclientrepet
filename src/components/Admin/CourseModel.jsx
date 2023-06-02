import React, { useState } from "react";
import "./CourseModel.css";
import { RiDeleteBin7Fill } from "react-icons/ri";

const CourseModel = ({
  isvisible,
  onClose,
  id,
  deleteButtonHandler,
  courseTitle,
  lectures = [1,2,3,4,5],
  addLectureHandler,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");
  if (!isvisible) return null;

  //photo upload
  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm   ">
      <div className="modalcontent  w-full max-h-full  bg-white">
        
          <button
            className=" text-xl  text-black"
            onClick={() => onClose()}
          >
            X
          </button>
          

          <div className="maincoursemodlecontent flex flex-row gap-6 w-4/5 mx-auto">
            <div className="coursemodelleft">
            <h1 className="text-3xl text-yellow-500 mb-5"> {courseTitle} </h1>
              <div className="firstbody">
                <h1> {courseTitle} </h1>
                <p> {`#${id}`} </p>
              </div>

              <div className="vidoe ">
                <h1> Lectures</h1>
                {
                  lectures.map((item,i)=>(
                    <VideoCard
                    key={i}
                  title={"React Icon"}
                  description={
                    "This is a intro lecture, where you will know the basic of react"
                  }
                  num={1}
                  lectureId={"jdsakjfdlas"}
                  courseId={id}
                  deleteButtonHandler={deleteButtonHandler}
                />
                  ))
                }
              </div>
            </div>

            <div className="modelright">
              <form
                class="max-w-lg mx-auto"
                onSubmit={(e) =>
                  addLectureHandler(e, id, title, description, video)
                }
              >
                <h1> Add Lecture </h1>
                <div class="mb-6">
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="title"
                  />
                </div>

                <div class="mb-6">
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="description"
                  />
                </div>

                <div class="mb-6">
                  <label
                    class="block text-gray-700 font-bold mb-2"
                    for="chooseAvatar"
                  >
                    Chose Avater
                  </label>
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    accept="video/mp4"
                    required
                    type={"file"}
                    onChange={changeVideoHandler}
                  />
                </div>

                {videoPrev && (
                  <video
                    className="h-28 my-10"
                    controlsList="nodownload"
                    controls
                    src={videoPrev}
                  ></video>
                )}

                <button
                  class="bg-yellow-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-96 "
                  type="submit"
                >
                  upload
                </button>
              </form>
            </div>


          </div>
        
      </div>
    </div>
  );
};

export default CourseModel;

function VideoCard({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteButtonHandler,
}) {
  return (
    <div className="divvidoemain flex  justify-between p-10 rounded-lg shadow-lg">
      <div className="vdo1">
        <h1> {`#${num} ${title}`} </h1>
        <p> {description} </p>
      </div>

      <div>
      <button
        className=" text-yellow-500"
        onClick={() => deleteButtonHandler(courseId, lectureId)}
      >
        {" "}
        <RiDeleteBin7Fill />{" "}
      </button>
      </div>
    </div>
  );
}
