--Magnet Mirror Force
--AlphaKretin
--[[
	When an opponent's monster declares a direct attack: 
	take control of the monster your opponent controls with the highest ATK (your choice, if tied) until the End Phase, 
	and if you do, all monsters your opponent controls must attack that monster, if able.
]]--
function c515310159.initial_effect(c)
	--Activate
	local e1=Effect.CreateEffect(c)
	e1:SetType(EFFECT_TYPE_ACTIVATE)
	e1:SetCode(EVENT_ATTACK_ANNOUNCE)
	e1:SetCondition(c515310159.condition)
	e1:SetTarget(c515310159.target)
	e1:SetOperation(c515310159.activate)
	c:RegisterEffect(e1)
end
function c515310159.condition(e,tp,eg,ep,ev,re,r,rp)
	return eg:GetFirst():IsControler(1-tp) and Duel.GetAttackTarget()==nil
end
function c515310159.target(e,tp,eg,ep,ev,re,r,rp,chk)
	if chk==0 then return Duel.IsExistingMatchingCard(Card.IsAttackPos,tp,0,LOCATION_MZONE,1,nil) end
	local g=Duel.GetMatchingGroup(Card.IsAttackPos,tp,0,LOCATION_MZONE,nil):GetMaxGroup(Card.GetAttack)
	if g:GetCount()>1 then
		Duel.Hint(HINT_SELECTMSG,tp,HINTMSG_CONTROL)
		local a=g:Select(tp,1,1,nil):GetFirst()
	else 
		local a=g:GetFirst()
	end
	Duel.SetTargetCard(a)
	Duel.SetOperationInfo(0,CATEGORY_CONTROL,a,1,0,0)
end
function c515310159.activate(e,tp,eg,ep,ev,re,r,rp)
	local a=Duel.GetFirstTarget()
	local c=e:GetHandler()
	if a:IsRelateToEffect(e) then
		if Duel.GetControl(a,tp,RESET_PHASE+PHASE_END) then
			local e1=Effect.CreateEffect(c)
			e1:SetType(EFFECT_TYPE_SINGLE)
			e1:SetCode(EFFECT_INDESTRUCTABLE_BATTLE)
			e1:SetValue(1)
			e1:SetReset(RESET_EVENT+0x1ff0000+RESET_PHASE+PHASE_END)
			a:RegisterEffect(e1)
			local e2=Effect.CreateEffect(c)
			e2:SetType(EFFECT_TYPE_SINGLE)
			e2:SetCode(EFFECT_ONLY_BE_ATTACKED)
			e2:SetReset(RESET_EVENT+0x1ff0000+RESET_PHASE+PHASE_END)
			a:RegisterEffect(e2)
			local e3=Effect.CreateEffect(c)
			e3:SetType(EFFECT_TYPE_FIELD)
			e3:SetCode(EFFECT_ONLY_ATTACK_MONSTER)
			e3:SetRange(LOCATION_MZONE)
			e3:SetTargetRange(0,LOCATION_MZONE)
			e3:SetReset(RESET_EVENT+0x1ff0000+RESET_PHASE+PHASE_END)
			a:RegisterEffect(e3)
			local e4=Effect.CreateEffect(c)
			e4:SetType(EFFECT_TYPE_FIELD)
			e4:SetCode(EFFECT_MUST_ATTACK)
			e4:SetRange(LOCATION_MZONE)
			e4:SetTargetRange(0,LOCATION_MZONE)
			e4:SetReset(RESET_EVENT+0x1ff0000+RESET_PHASE+PHASE_END)
			a:RegisterEffect(e4)
		end
	end
end
