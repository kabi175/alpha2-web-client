import { TableDemo } from "./table";

export default async function Page() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-4 py-8">
                <h1 className="text-2xl font-bold">Fund House</h1>
                <TableDemo />
            </div>
        </div>
    );
}
