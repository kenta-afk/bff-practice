import { greeterResolvers } from './greeter';
import { postingResolvers } from './posting';

const mergeResolvers = (resolvers: any[]) => {
    return resolvers.reduce((result, resolver) => {
        Object.keys(resolver).forEach((key) => {
            if (!result[key]) {
                result[key] = {};
            }

            result[key] = { ...result[key], ...resolver[key] };
        });

        return result;
    }, {});
};

export const resolvers = mergeResolvers([
    greeterResolvers,
    postingResolvers,
]);