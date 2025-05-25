import ClientSideCustomEditor from "./ClientSideCustomEditor";

export default function Page() {
  return (
    <div className="h-screen w-5/6">
      <div className="app__offer-editor" key="offer-editor">
        <ClientSideCustomEditor />
      </div>
    </div>
  );
}
