export interface ApiResult<TResult> {
	page: number;
	results: TResult[];
	total_pages: number;
	total_results: number;
}
