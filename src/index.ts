import { Options } from "graphql-yoga";
import app from "./app";

// graphQL 에서는 import 를 모듈 -> 라이브러리 순으로 해야한다

const PORT: number | string = process.env.PORT || 4000;
// PORT 상수의 타입은 number나 string
// PORT 상수에는 입력받은 port 환경 변수나 4000을 할당
const PLAYGROUND_ENDPOINT: string = "/playground";
// PLAYGROUND의 값으로 url '/playgrouond'를 할당한 것
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
};

const handleAppStart = () => console.log(`Listening on port ${PORT}`);
// app.start는 콜백 함수도 입력받을 수 있다. app.starts는 options 파라미터와 콜백 파라미터를 가진다
// callback에는 물음표가 붙어있는데, 이건 콜백함수가 있어도 되고 없어도 된다는 뜻
app.start(appOptions, handleAppStart);
