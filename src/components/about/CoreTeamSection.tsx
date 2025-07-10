import Image from 'next/image';
type TeamMember = { name: string; role: string };
export default function CoreTeamSection({ teamMembers }: { teamMembers: TeamMember[] }) {
  return (
    <div className="w-full bg-white flex flex-col gap-10 py-16 items-center justify-center" style={{ boxShadow: '0px 1px 0px 0px #E4E7E9 inset' }}>
      <h2 className="text-2xl font-semibold text-center mb-10 text-[#191C1F]">Our core team member</h2>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => {
            const bgColors = [
              'bg-[#F6F6F6]',
              'bg-[#FDE9E2]',
              'bg-[#F6F6F6]',
              'bg-[#191C1F]',
              'bg-[#FFF3D6]',
              'bg-[#E6EAEE]',
              'bg-[#F6F6F6]',
              'bg-[#D6F3F0]',
            ];
            return (
              <div
                key={idx}
                className="bg-white border border-[#E4E7E9] rounded-[3px] p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center overflow-hidden ${bgColors[idx]}`}>
                  <Image
                    src={`/images/kevin${idx + 1}.png`}
                    alt={`Team Member ${idx + 1}`}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-base text-[#191C1F]">{member.name}</h3>
                  <p className="text-sm text-[#5F6C72]">{member.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 