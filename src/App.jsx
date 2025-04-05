import { useState } from 'react';
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Label
} from 'recharts';

const policies = [
  {
    name: "New India Asha Kiran Policy",
    links: {
      brochure: "https://www.newindia.co.in/assets/docs/know-more/health/asha-kiran-policy/Prospectus%20New%20India%20Asha%20Kiran%20Policy.pdf",
      clause: "https://www.newindia.co.in/assets/docs/know-more/health/asha-kiran-policy/New%20India%20Asha%20kiran%20policy%20clause%20.pdf",
      premium: null,
      proposal: null
    },
    rating: 7.5,
    copay: "20%",
    premium: 3500,
    type: "Standalone",
    ciCover: true,
    maternityWait: 36,
    network: 6000,
  },
  {
    name: "New India Mediclaim Policy",
    links: {
      brochure: "https://www.newindia.co.in/assets/docs/know-more/health/new-india-mediclaim-policy/Prospectus%20New%20India%20Mediclaim%20Policy-2.pdf",
      clause: "https://www.newindia.co.in/assets/docs/know-more/health/new-india-mediclaim-policy/Policy%20Clause%20New%20India%20mediclaim.pdf",
      premium: "https://www.newindia.co.in/assets/docs/know-more/health/new-india-mediclaim-policy/Premium%20chart-New%20India%20Mediclaim%20Policy.pdf",
      proposal: null
    },
    rating: 8.0,
    copay: "10%",
    premium: 4000,
    type: "Standalone",
    ciCover: true,
    maternityWait: 24,
    network: 6200,
  },
  {
    name: "New India Floater Mediclaim Policy",
    links: {
      brochure: null,
      clause: "https://www.newindia.co.in/assets/docs/know-more/health/floater-mediclaim-policy/Policy%20Clause%20New%20India%20Floater%20Mediclaim%20Policy.pdf",
      premium: "https://www.newindia.co.in/assets/docs/know-more/health/floater-mediclaim-policy/premium%20chart-%20New%20India%20Floater%20mediclaim%20policy%2001102024%20(1).pdf",
      proposal: "https://www.newindia.co.in/assets/docs/know-more/health/floater-mediclaim-policy/New%20India%20Floater%20Mediclaim%20Policy%20Proposal%20Form%20WEF%2001%20OCT%202024.pdf"
    },
    rating: 7.8,
    copay: "None",
    premium: 4500,
    type: "Standalone",
    ciCover: true,
    maternityWait: 12,
    network: 6300,
  },
  {
    name: "New India Premier Mediclaim Policy",
    links: {
      brochure: "https://www.newindia.co.in/assets/docs/know-more/health/new-premier-mediclaim-claim-policy/Prospectus%20New%20India%20Premier%20Mediclaim.pdf",
      clause: "https://www.newindia.co.in/assets/docs/know-more/health/new-premier-mediclaim-claim-policy/Policy%20Clause%20New%20India%20Premier%20Mediclaim.pdf",
      premium: "https://www.newindia.co.in/assets/docs/know-more/health/new-premier-mediclaim-claim-policy/New%20India%20Premier%20mediclaim%20premium%20chart.pdf",
      proposal: null
    },
    rating: 9.2,
    copay: "None",
    premium: 8000,
    type: "Standalone",
    ciCover: true,
    maternityWait: 24,
    network: 6500,
  },
  {
    name: "Young India Digi Health Policy",
    links: {
      brochure: "https://www.newindia.co.in/assets/docs/know-more/health/young-india-digi-health-policy/Prospectus%20Young%20India%20Digi%20Health.pdf",
      clause: "https://www.newindia.co.in/assets/docs/know-more/health/young-india-digi-health-policy/Policy%20clause%20Young%20India.pdf",
      premium: null,
      proposal: null
    },
    rating: 8.5,
    copay: "None",
    premium: 3900,
    type: "Standalone",
    ciCover: true,
    maternityWait: 24,
    network: 6100,
  },
  {
    name: "Yuva Bharat Health Policy",
    links: {
      brochure: "https://www.newindia.co.in/assets/docs/know-more/health/yuva-bharat-health-policy/Yuva%20Bharat%20Health%20Policy-Brochure.pdf",
      clause: "https://www.newindia.co.in/assets/docs/know-more/health/yuva-bharat-health-policy/Policy%20Clause%20Yuva%20Bharat%20Health_Revision.pdf",
      premium: "https://www.newindia.co.in/assets/docs/know-more/health/yuva-bharat-health-policy/premium%20chart%20yuva%20bharat%20.pdf",
      proposal: null
    },
    rating: 7.6,
    copay: "15%",
    premium: 3100,
    type: "Standalone",
    ciCover: true,
    maternityWait: 36,
    network: 5900,
  },
  {
    name: "Arogya Sanjeevani Policy",
    links: {
      brochure: "https://www.newindia.co.in/assets/docs/know-more/health/arogya-sanjeevani/Prospectus%20Arogya%20Sanjeevani%20Policy.pdf",
      clause: "https://www.newindia.co.in/assets/docs/know-more/health/arogya-sanjeevani/POLICY%20CLAUSES%20Arogya%20Sanjeevani.pdf",
      premium: "https://www.newindia.co.in/assets/docs/know-more/health/arogya-sanjeevani/Arogya%20Sanjeevani%20Premium%20Chart%20WEF%2001%20NOV%202024.pdf",
      proposal: "https://www.newindia.co.in/assets/docs/know-more/health/arogya-sanjeevani/New%20India%20Arogya%20sanjeevani%20policy%20Proposal%20form%20WEF%2001%20OCT%202024.pdf"
    },
    rating: 8.1,
    copay: "5%",
    premium: 2800,
    type: "Standalone",
    ciCover: true,
    maternityWait: 12,
    network: 6000,
  },
  {
    name: "New India Cancer Guard Policy",
    links: {
      brochure: "https://www.newindia.co.in/assets/docs/know-more/health/cancer-guard-policy/Prospectus%20New%20India%20Cancer%20Guard.pdf",
      clause: "https://www.newindia.co.in/assets/docs/know-more/health/cancer-guard-policy/Policy%20clause%20New%20India%20Cancer%20Guard.pdf",
      premium: "https://www.newindia.co.in/assets/docs/know-more/health/cancer-guard-policy/Premium%20Chart%20New%20India%20Cancer%20Guard1-1.pdf",
      proposal: "https://www.newindia.co.in/assets/docs/know-more/health/cancer-guard-policy/Proposal%20Form%20New%20India%20Cancer%20Guard%20WEF%2001%20OCT%202024.pdf"
    },
    rating: 8.4,
    copay: "None",
    premium: 3200,
    type: "Standalone",
    ciCover: true,
    maternityWait: null,
    network: 5800,
  },
  {
    name: "New India Top-Up Mediclaim Policy",
    links: {
      brochure: "https://www.newindia.co.in/assets/docs/know-more/health/top-up-mediclaim-policy/Prospectus%20New%20India%20Top-Up%20Mediclaim%20.pdf",
      clause: "https://www.newindia.co.in/assets/docs/know-more/health/top-up-mediclaim-policy/policy%20clause%20New%20India%20top%20up%20mediclaim.pdf",
      premium: "https://www.newindia.co.in/assets/docs/know-more/health/top-up-mediclaim-policy/Premium%20Chart%20New%20India%20TOP%20UP%20Mediclaim%20Policy%20WEF%2001%20NOV%202024.pdf",
      proposal: "https://www.newindia.co.in/assets/docs/know-more/health/top-up-mediclaim-policy/Revised%20New%20India%20Top%20Up%20Mediclaim%20-%20Proposal%20Form.pdf"
    },
    rating: 7.0,
    copay: "None",
    premium: 1200,
    type: "Top-Up",
    ciCover: false,
    maternityWait: null,
    network: 6000,
  }
];




export default function App() {
  const [maxPremium, setMaxPremium] = useState('');
  const [minRating, setMinRating] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [maxCoPay, setMaxCoPay] = useState('');
  const [minNetwork, setMinNetwork] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [showChart, setShowChart] = useState(true);

  const filtered = policies.filter(p => {
    const premiumCheck = maxPremium === '' || p.premium <= parseFloat(maxPremium);
    const ratingCheck = minRating === '' || p.rating >= parseFloat(minRating);
    const typeCheck = selectedType === '' || p.type === selectedType;
    const copayCheck = maxCoPay === '' || parseFloat(p.copay.replace('%', '')) <= parseFloat(maxCoPay);
    const networkCheck = minNetwork === '' || p.network >= parseInt(minNetwork);
    return premiumCheck && ratingCheck && typeCheck && copayCheck && networkCheck;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'premium') return a.premium - b.premium;
    return 0;
  });

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Health Insurance Comparator</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        <input placeholder="Max Premium (₹)" value={maxPremium} onChange={e => setMaxPremium(e.target.value)} />
        <input placeholder="Min Rating (0-10)" value={minRating} onChange={e => setMinRating(e.target.value)} />
        <input placeholder="Max Co-Pay (%)" value={maxCoPay} onChange={e => setMaxCoPay(e.target.value)} />
        <input placeholder="Min Network Hospitals" value={minNetwork} onChange={e => setMinNetwork(e.target.value)} />
        <select onChange={e => setSelectedType(e.target.value)} defaultValue="">
          <option value="">All Types</option>
          <option value="Standalone">Standalone</option>
          <option value="Top-Up">Top-Up</option>
        </select>
        <select onChange={e => setSortBy(e.target.value)} defaultValue="">
          <option value="">No Sorting</option>
          <option value="rating">Sort by Rating</option>
          <option value="premium">Sort by Premium</option>
        </select>
        <button onClick={() => setShowChart(!showChart)}>
          {showChart ? 'Hide Chart' : 'Show Chart'}
        </button>
      </div>

      {showChart && (
        <div style={{ width: '100%', height: '400px', marginTop: '2rem' }}>
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid />
              <XAxis type="number" dataKey="premium" name="Premium">
                <Label value="Premium (₹)" offset={-10} position="insideBottom" />
              </XAxis>
              <YAxis type="number" dataKey="rating" name="Rating" domain={[0, 10]}>
                <Label value="Rating (0-10)" angle={-90} position="insideLeft" />
              </YAxis>
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Policies" data={sorted} fill="#f97316" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        {sorted.map(policy => (
          <div key={policy.name} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            <h2 className="text-xl font-semibold mb-2">
            <a href={policy.brochureLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {policy.name}
            </a>
            </h2>
            <p><strong>Rating:</strong> {policy.rating}</p>
            <p><strong>Premium:</strong> ₹{policy.premium}</p>
            <p><strong>Co-Pay:</strong> {policy.copay}</p>
            <p><strong>Type:</strong> {policy.type}</p>
            <p><strong>Critical Illness Cover:</strong> {policy.ciCover ? 'Yes' : 'No'}</p>
            <p><strong>Maternity Wait:</strong> {policy.maternityWait ? `${policy.maternityWait} months` : 'N/A'}</p>
            <p><strong>Network Hospitals:</strong> {policy.network}+</p>
          </div>
        ))}
      </div>
    </div>
  );
}
