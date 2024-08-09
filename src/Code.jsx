import { CodeBlock } from "react-code-block";

function Code(props) {
  return (
    <CodeBlock code={props.projectCode} language="jsx">
      <CodeBlock.Code className="m-1 text-wrap rounded-3xl border border-gray-700 bg-gray-900 p-1 text-xs sm:mx-24 sm:p-6">
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
