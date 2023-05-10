"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

interface PaginationProps {
  next: number;
  prev: number;
}

function Pagination({ next, prev }: PaginationProps) {
  const [page, setPage] = useState<number>(1);

  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("start") == "1") {
      setPage(1);
    }
  }, [searchParams]);

  function nextPage() {
    if (next) {
      router.push(path + "?" + "q=" + searchParams.get("q") + "&start=" + next);
      setPage(page + 1);
    } else {
      return;
    }
  }
  function prevPage() {
    if (prev) {
      router.push(path + "?" + "q=" + searchParams.get("q") + "&start=" + prev);
      setPage(page - 1);
    } else {
      return;
    }
  }
  return (
    <div className="btn-group my-10">
      <button className="btn" onClick={prevPage}>
        «
      </button>
      <button className="btn">Page {page}</button>
      <button className="btn" onClick={nextPage}>
        »
      </button>
    </div>
  );
}

export default Pagination;
