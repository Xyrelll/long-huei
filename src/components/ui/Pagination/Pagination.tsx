import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  queryParams?: Record<string, string>;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
  queryParams = {},
  className = "",
}: PaginationProps) {
  // Extract existing query params from baseUrl
  const baseUrlParts = baseUrl.split("?");
  const basePath = baseUrlParts[0];
  const existingParams = baseUrlParts[1]
    ? new URLSearchParams(baseUrlParts[1])
    : new URLSearchParams();

  // Build query string from queryParams, preserving existing params
  const buildQueryString = (pageNo: number) => {
    const params = new URLSearchParams(existingParams);
    params.set("PageNo", pageNo.toString());
    // Add or update any additional queryParams
    Object.entries(queryParams).forEach(([key, value]) => {
      params.set(key, value);
    });
    return params.toString();
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className={`pagination mt-8 ${className}`}
      aria-label="Page navigation"
    >
      <div
        style={{
          paddingTop: "50px",
          paddingBottom: "20px",
        }}
        className="pagination-container flex justify-center"
      >
        <ul className="pagination flex justify-center items-center border border-white rounded-lg overflow-hidden">
          {/* Previous button */}
          {currentPage > 1 && (
            <li
              className="page-item border-r border-white bg-black hover:bg-[#2C261C] transition-colors"
              style={{
                padding: "5px 10px",
              }}
            >
              <Link
                href={`${basePath}?${buildQueryString(currentPage - 1)}`}
                rel="prev"
                className="page-link px-6 py-2 text-white block"
              >
                &lt;
              </Link>
            </li>
          )}

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum, index) => {
              const hasNextButton = currentPage < totalPages;
              const isLastPage = index === totalPages - 1;
              const shouldHaveBorder = !isLastPage || hasNextButton;

              return (
                <li
                  key={pageNum}
                  style={{
                    padding: "5px 10px",
                  }}
                  className={`page-item ${
                    shouldHaveBorder ? "border-r border-white" : ""
                  } ${
                    pageNum === currentPage
                      ? "bg-[#CD861A]"
                      : "bg-black hover:bg-[#2C261C]"
                  } transition-colors`}
                >
                  {pageNum === currentPage ? (
                    <span className="page-link px-6 py-2 text-white block text-[16px]">
                      {pageNum}
                    </span>
                  ) : (
                    <Link
                      href={`${basePath}?${buildQueryString(pageNum)}`}
                      className="page-link px-6 py-2 text-white block text-[14px]"
                    >
                      {pageNum}
                    </Link>
                  )}
                </li>
              );
            }
          )}

          {/* Next button */}
          {currentPage < totalPages && (
            <li
              className="page-item bg-black hover:bg-[#2C261C] transition-colors"
              style={{
                padding: "5px 10px",
              }}
            >
              <Link
                href={`${basePath}?${buildQueryString(currentPage + 1)}`}
                rel="next"
                className="page-link px-6 py-2 text-white block"
              >
                &gt;
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
