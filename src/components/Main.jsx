import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "../callAI";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const recipeSection = React.useRef(null);

  React.useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({behavior: "smooth"});
    }
  }, [recipe]);

  async function handleRecipeShown() {
    try {
      const recipeMarkdown = await getRecipeFromMistral(ingredients);
      setRecipe(recipeMarkdown);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  }

  function onSubmitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    const formEl = event.currentTarget;
    setIngredients((oldIngredients) => [...oldIngredients, newIngredient]);
    formEl.reset();
  }

  return (
    <main>
      <form onSubmit={onSubmitForm} className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientList
          customRef={recipeSection} 
          handleRecipeShown={handleRecipeShown}
          ingredients={ingredients}
        />
      )}
      {recipe && <ClaudeRecipe response={recipe} />}
    </main>
  );
}
