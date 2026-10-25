const COLUMNS = [0, 1, 2, 3, 4];
const ROWS = ['11%', '64%', '93%'];

export const SwissGridOverlay = () => {
    return (
        <div className="pointer-events-none absolute inset-0 z-10 mx-auto max-w-[1440px] px-6 md:px-12">
            <div className="relative h-full w-full">
                <div className="grid h-full w-full grid-cols-2 md:grid-cols-4 border-x border-white/15">
                <div className="border-r border-white/15 h-full" />
                <div className="hidden md:block border-r border-white/15 h-full" />
                <div className="hidden md:block border-r border-white/15 h-full" />
                <div className="h-full" />                
            </div>

            {ROWS.map((rowTop, rIdx) => (
                <div
                    key={rIdx}
                    style={{ top: rowTop }}
                    className="WithCrosshairs absolute left-0 right-0 border-t border-white/15"
                >
                    <div className="relative flex justify-between w-full">
                        {COLUMNS.map((col) => (
                            <span
                                key={col}
                                className={`-translate-y-1/2 select-none font-mono text-xs font-light text-white/60 ${
                                        col > 0 && col < 4 ? 'hidden md:inline-block' : 'inline-block'
                                }`}
                                
                                >
                                    +
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
