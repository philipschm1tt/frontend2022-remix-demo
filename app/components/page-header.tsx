export function PageHeader({
                               headline, subHeadline
                           }: { headline: string; subHeadline: string }) {
    return (
        <header className="py-20 px-4 bg-blue-900">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-2 text-white">
                    {headline}
                </h1>
                <p className="text-2xl text-gray-200">
                    {subHeadline}
                </p>
            </div>
        </header>
    );
}
