// NPM packages
import { useState } from "react";

// Project files
import InputFields from "components/InputFields";
import InputImage from "components/InputImage";
import Textarea from "components/Textarea";
import fields from "data/create-title.json";
import { createDocument, updateDocument } from "scripts/firestore";
import { useContent } from "state/ContentProvider";

export default function TitleForm({ title, category, state }) {
  // Global state
  const { titleDispatch } = useContent();
  const [editModeState, modifiedDateState] = state;

  // Local state
  const [form, setForm] = useState({
    id: title.id,
    name: title.name,
    thumbImage: title.thumbUrl,
    mainImage: title.mainImageUrl,
    description: title.description,
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Constants
  const filename = form.name.toLowerCase().split(" ").join("-");

  // Methods
  async function onPublish(event) {
    event.preventDefault();
    const path = `categories/${category.id}/items`;
    const editedTitle = {
      type: category.name,
      name: form.name,
      thumbUrl: form.thumbImage,
      mainImageUrl: form.mainImage,
      description: form.description,
    };

    if (title.id !== "") await updateDocument(path, title.id, editedTitle);
    else {
      const newId = await createDocument(path, editedTitle);
      titleDispatch({
        type: "CREATE_TITLE",
        payload: { id: newId, ...editedTitle },
      });
    }

    titleDispatch({
      type: "UPDATE_TITLE",
      payload: { id: title.id, data: editedTitle },
    });
    editModeState(false);
    modifiedDateState(new Date());
  }

  function cancelEdit() {
    if (
      window.confirm(
        "Do you really want to cancel the form? Your changes would be lost"
      )
    ) {
      editModeState(false);
    }
  }

  return (
    <form className="admin-form title-form">
      <h2>{title.name === "" ? "Create" : "Edit "} title</h2>
      <InputFields
        fields={fields}
        legend="General info"
        state={[form, setForm]}
        errors={errorMessage}
      />
      <Textarea
        legend="Description"
        fieldName="description"
        state={[form, setForm]}
      />
      <InputImage
        label="Thumb"
        id="thumbImage"
        state={[form, setForm]}
        filename={`${form.type}/thumbImage/${filename}`}
      />
      <InputImage
        label="Main image"
        id="mainImage"
        filename={`${form.type}/mainImage/${filename}`}
        state={[form, setForm]}
      />
      <footer>
        <button
          type="submit"
          className="button save-button"
          onClick={onPublish}
        >
          Publish title
        </button>
        <button className="cancel-button" onClick={cancelEdit}>
          Cancel
        </button>
      </footer>
    </form>
  );
}
