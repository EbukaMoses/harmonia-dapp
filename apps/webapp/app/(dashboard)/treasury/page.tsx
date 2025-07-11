
import AssetManagementPanel from '@/components/treasury/ui/pages/AssetManagementPanel'
import BudgetAllocation from '@/components/treasury/ui/pages/BudgetAllocation'
import TransactionHistory from '@/components/treasury/ui/pages/TransactionHistory'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Treasury | Harmonia',
	description: 'Manage your DAO treasury assets and transactions',
}

export default function TreasuryPage() {
	return (
		<div className="h-full md:h-screen">
			<div className="px-7 mx-auto mt-5">
				<div className="flex flex-col md:flex-row justify-between">
					<div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						<div className="order-1 md:order-1 md:col-span-1 lg:col-span-2">
							<TransactionHistory />
						</div>

						<div className="order-2 md:order-1 md:col-span-1">
							<BudgetAllocation />
							<div className="mt-6">
								<AssetManagementPanel />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
