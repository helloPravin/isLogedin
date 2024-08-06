import { CodeBlock } from "react-code-block";

function Code(props) {
  return (
    <CodeBlock code={props.projectCode} language="jsx">
      <CodeBlock.Code className="mx-2 text-wrap rounded-3xl border border-black p-6 text-xs sm:mx-24">
        <div className="table-row">
          <CodeBlock.LineNumber className="table-cell select-none pr-4 text-right text-sm text-gray-500" />
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
}
export default Code;
