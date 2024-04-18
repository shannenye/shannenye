export interface RecipeBlockData {
    id: string;
    name: string;
    shortDesc: string;
    thumbnail: string | null;
}

export interface RecipeData extends RecipeBlockData {
    summary: string;
    images: string[];
    ingredients: string[];
    instructions: string;
}

export const recipeData: RecipeData[] = [
    {
        id: 'r1',
        name: 'Immunity Booster',
        shortDesc: `My homemade recipe to boost your immune system. Make ahead and store it in the fridge! My husband and I usually take a shotglass of this mixture every morning to start the day.`,
        summary: '',
        images: [],
        thumbnail: null,
        ingredients: [],
        instructions: ''
    },
    {
        id: 'r2',
        name: 'Beef and Radish Soup',
        shortDesc: `This refreshing soup is one of the easiest things to make and you only need a few ingredients. It's perfect for a day that you want to have some soup but don't want to spend more than 30 minutes on.`,
        summary: '',
        images: [],
        thumbnail: null,
        ingredients: [],
        instructions: ''
    },
    {
        id: 'r3',
        name: 'Congee',
        shortDesc: `This easy recipe is great for those lazy days or when someone is sick and it only takes about 20 minutes! It's very versatile so I usually throw in some chicken bouillon to zazz it up.`,
        summary: '',
        images: [],
        thumbnail: null,
        ingredients: [],
        instructions: ''
    },
];