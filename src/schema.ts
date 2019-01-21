// 이 파일에서는 api 폴더 안의 모든 폴더들을 살펴본 후에 graphql 파일, resolvers 파일들을 찾아서 app에 전달하면 된다.

// import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path"; // 이 모듈은 node.js가 있으면 자동으로 따라오는 모듈

const allTypes: any = fileLoader(
  //allTypes 상수의 타입은 Graphql Schema의 배열이 될것
  path.join(__dirname, "./api/**/*.graphql") // 깊이와 상관없이 api 폴더 안에 있는 모든 폴더들 안에 있는 파일들 중 .graphql로 끝나는 파일들을 모두 가져오겠다.
);

const allResolvers: any = fileLoader(
  path.join(__dirname, "./api/**/*.resolvers.*") // 아무거나로 끝나는 파일명(*)을 가지는 이유는 지금은 ts이지만 배포용으로 빌드하면 ts파일들을 js 파일로 바꿔야 하기 때문F
);

const mergedTypes: any = mergeTypes(allTypes);
const mergedResolvers: any = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers
});
// typeDefinition과 resolver를 입력받는 함수
// makeExecutalbeSchemas는 allTypes가 하는 것 처럼 schema 들을 하나로 합쳐주는 일을 한다

export default schema;
