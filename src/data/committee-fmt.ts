export interface CommitteeMember {
	id: string;
	name: string;
	position: string;
	subject: string;
	college: string;
	year: string;
	photo: string;
	email?: string;
};

type GeneratedFields = 'position' | 'photo' | 'email';
export type PartialCommitteeMember = Omit<CommitteeMember, GeneratedFields>;

const positionMap: Record<string, string> = {
	"president": "President",
	"vice-president": "Vice President",
	"secretary": "Secretary",
	"treasurer": "Treasurer",
	"sports": "Sports Secretary",
	"publicity": "Publicity Secretary",
	"access": "Access & Outreach Officer",
	"sponsorship": "Sponsorship & Careers Officer",
	"database": "Database Officer",
	"events": "Events Officer",
	"gradrep": "Graduate Representative",
};

function generateFields(memberList: PartialCommitteeMember[], year: number): CommitteeMember[] {
	return memberList.map((member, i) => ({
		...member,
		position: positionMap[member.id] ?? "UNKNOWN",
		photo: `/committee/${year}-${i + 1}.jpg`,
		email: member.id + "@cumsa.org",
	}));
}

export async function getCommitteeMembers(year: number): Promise<CommitteeMember[]> {
	console.log(`@/data/committee${year}.ts`);
	console.log(await import(`@/data/committee${year}.ts`));
	try {
		const mod = await import(`@/data/committee${year}.ts`) as { default: PartialCommitteeMember[] };
		return generateFields(mod.default, year);
	} catch {
		console.log("FAIL");
		return [];
	}
}
