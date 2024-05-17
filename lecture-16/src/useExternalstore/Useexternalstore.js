import React , {useActionState , redirect , updateName} from 'react'
function ChangeName({ name, setName }) {
    const [error, submitAction, isPending] = useActionState(
      async (previousState, formData) => {
        const error = await updateName(formData.get("name"));
        if (error) {
          return error;
        }
        redirect("/path");
        return null;
      },
      null,
    );
  
    return (
      <form action={submitAction}>
        <input type="text" name="name" />
        <button type="submit" disabled={isPending}>Update</button>
        {error && <p>{error}</p>}
      </form>
    );
  }

  export default ChangeName;


