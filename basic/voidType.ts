// void and never

const logger = (msg: string): void => {
  console.log(msg);
};

logger('에러 메시지!');

const throwErr = (msg: string):never => {
  throw new Error(msg);
};
throwErr('에러');



