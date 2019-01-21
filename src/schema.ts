// 이 파일에서는 api 폴더 안의 모든 폴더들을 살펴본 후에 graphql 파일, resolvers 파일들을 찾아서 app에 전달하면 된다.

import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path"; // 이 모듈은 node.js가 있으면 자동으로 따라오는 모듈

