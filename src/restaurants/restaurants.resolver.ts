import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity'


@Resolver(of => Restaurant)
export class RestaurantResolver {
	@Query(returns => [Restaurant])
	restaurants(@Args('veganOnly') veganOnly: boolean) :Restaurant[] {
		return [];
	}
	@Mutation(returns => Boolean)
	createRestaurant(): boolean {
		return true;
	}
}