export default function IngredientList(props){  

  const ingredientsListItems = props.ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

    return (
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientsListItems}
        </ul>
        {props.ingredientsLength> 3 ? (
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.handleRecipeShown}>Get a recipe</button>
          </div>
        ) : null}
      </section>
    );
}