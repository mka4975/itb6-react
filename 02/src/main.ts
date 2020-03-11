import square from "./square";
import sum from "./sum";

document.body.innerHTML = `
    <p>2 + 2 = ${sum(2, 2)}</p>
    <p>2^2 = ${square(2)}</p>
`;
