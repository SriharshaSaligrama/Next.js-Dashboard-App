import { Suspense } from "react";
import Table from '@/app/ui/customers/table';
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { fetchFilteredCustomers } from "@/app/lib/data";

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const filteredCustomers = await fetchFilteredCustomers(query);

    return (
        <div className="w-full">
            <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
                <Table customers={filteredCustomers} />
            </Suspense>
        </div>
    )
}