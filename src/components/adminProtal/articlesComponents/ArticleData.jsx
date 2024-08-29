import { React, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
// import { PiMicrosoftPowerpointLogoDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
//  import {UserContext} from"./data2";
const ArticleData = (props) => {
  const [z, setz] = useState(false);
  const [y, sety] = useState(false);
  const [x, setx] = useState("Draft");
  // const a=useContext(UserContext)
  // const[title,settitle]=useState([{article:"Here's the article title",category:"tech",date:"monday,june5th",time:"12:30pm"}])
  const Code = () => {
    setz(!z);
    sety(!y);
    if (y === false) {
      setx("Published");
    } else {
      setx("Draft");
    }
  };
  return (
    <div className="my-2 pt-2 article-table-article-container text-white ">
      <h4 className=" mt-3">{props.title}</h4>
      <h4 className="mt-3">{props.category}</h4>
      <div className="mt-3">
        <button
          className={z ? "status-btn-published rounded-4 " : "status-btn-draft rounded-4"}
          onClick={Code}
        >
          {x}
        </button>
      </div>
      <div className="">
        <div className=" ">
          <div className="col-sm-8 ">
            <p>{props.date}</p>
            <p>{props.time}</p>
          </div>
        </div>
      </div>
      <div className="icon col-sm-4 mt-4 ml-5 ">
        <Link>
          <BsPencilSquare />
        </Link>
        <Link>
          <FaTrashAlt />
        </Link>
      </div>
    </div>
  );
};
export default ArticleData;
