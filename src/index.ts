import "reflect-metadata";
import "core-js/es5"; 
import "regenerator-runtime/runtime";
import { ObjectType, Field, ID, Resolver, Query, Arg, buildSchema } from "type-graphql";

@ObjectType()
class Recipe {
    @Field(type => ID)
    id: string;

    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field()
    creationDate: Date;

    @Field(type => [String])
    ingredients: string[];
}

@Resolver(Recipe)
class RecipeResolver {
    @Query(returns => Recipe)
    async recipe(@Arg("id") id: string) {
        return new Recipe();
    }
}

async function test() {
    const schema = await buildSchema({
        resolvers: [RecipeResolver],
    });
    console.log(schema);
}

test();