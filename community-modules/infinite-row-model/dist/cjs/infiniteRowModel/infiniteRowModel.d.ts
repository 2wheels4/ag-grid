import { BeanStub, IDatasource, RowBounds, RowDataTransaction, RowNode, IInfiniteRowModel } from "@ag-grid-community/core";
export declare class InfiniteRowModel extends BeanStub implements IInfiniteRowModel {
    private gridOptionsWrapper;
    private filterManager;
    private sortController;
    private selectionController;
    private gridApi;
    private columnApi;
    private rowRenderer;
    private infiniteCache;
    private rowNodeBlockLoader;
    private datasource;
    private rowHeight;
    private cacheParams;
    getRowBounds(index: number): RowBounds;
    ensureRowHeightsValid(startPixel: number, endPixel: number, startLimitIndex: number, endLimitIndex: number): boolean;
    init(): void;
    start(): void;
    private destroyDatasource;
    isLastRowFound(): boolean;
    private addEventListeners;
    private onFilterChanged;
    private onSortChanged;
    private onColumnEverything;
    private isSortModelDifferent;
    getType(): string;
    setDatasource(datasource: IDatasource | undefined): void;
    private checkForDeprecated;
    isEmpty(): boolean;
    isRowsToRender(): boolean;
    getNodesInRangeForSelection(firstInRange: RowNode, lastInRange: RowNode): RowNode[];
    private reset;
    private createModelUpdatedEvent;
    private resetCache;
    private destroyCache;
    private onCacheUpdated;
    getRow(rowIndex: number): RowNode | null;
    getRowNode(id: string): RowNode | null;
    forEachNode(callback: (rowNode: RowNode, index: number) => void): void;
    getCurrentPageHeight(): number;
    getTopLevelRowCount(): number;
    getTopLevelRowDisplayedIndex(topLevelIndex: number): number;
    getRowIndexAtPixel(pixel: number): number;
    getRowCount(): number;
    updateRowData(transaction: RowDataTransaction): void;
    isRowPresent(rowNode: RowNode): boolean;
    refreshCache(): void;
    purgeCache(): void;
    getVirtualRowCount(): number | null;
    isMaxRowFound(): boolean | undefined;
    setVirtualRowCount(rowCount: number, maxRowFound?: boolean): void;
    getBlockState(): any;
}
