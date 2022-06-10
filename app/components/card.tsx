export function Card({
                         headline, body
                     }: { headline: string; body: string }) {
    return (
        <article>
            <div className="flex justify-center">
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <h3 className="text-gray-900 text-xl leading-tight font-medium mb-2">{headline}</h3>
                    <p className="text-gray-700 text-base">{body}</p>
                </div>
            </div>
        </article>
    );
}
