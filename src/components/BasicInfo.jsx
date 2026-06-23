import { useDispatch } from "react-redux";
import { updateField } from "../store/eventSlice";
import { useId } from "react";

function BasicInfo({ next }) {

  const dispatch = useDispatch();

  const titleId = useId();

  const descriptionId = useId();

  const categoryId = useId();

  const imageId = useId();

  return (

    <div className="basic-info-card">

      <label htmlFor={titleId}>
        Title
      </label>

      <input id={titleId} placeholder="Title"
        onChange={(e)=>
          dispatch(
            updateField({
              name:"title",
              value:e.target.value
            })
          )
        }
      />

      <label htmlFor={descriptionId}>
        Description
      </label>

      <textarea id={descriptionId}  placeholder="Description"
        onChange={(e)=>
          dispatch(
            updateField({
              name:"description",
              value:e.target.value
            })
          )
        }
      />

      <label htmlFor={categoryId}>
        Category
      </label>

      <input
        id={categoryId} placeholder="Category"
        onChange={(e)=>
          dispatch(
            updateField({
              name:"category",
              value:e.target.value
            })
          )
        }
      />

      <label htmlFor={imageId}>
        Image URL
      </label>

      <input
        id={imageId} placeholder="Image URL"
        onChange={(e)=>
          dispatch(
            updateField({
              name:"image",
              value:e.target.value
            })
          )
        }
      />

      <button onClick={next}>
        Next
      </button>

    </div>

  );
}

export default BasicInfo;