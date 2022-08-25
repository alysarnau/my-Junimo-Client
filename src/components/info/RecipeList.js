import RecipePreview from "./RecipePreview"

const RecipeList = (props) => {
    const {recipes, setMaterialId, setRecipeId, setRecipeListShow} = props
    let allRecipes
    allRecipes = recipes.map((recipe, index) => (
        <RecipePreview key={index} recipe={recipe} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
    ))

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {allRecipes}
        </div>
    )
}

export default RecipeList