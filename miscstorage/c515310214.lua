--Tinsight Urgent Launch
--AlphaKretin
function c515310214.initial_effect(c)
	local e1=Effect.CreateEffect(c)
	e1:SetCategory(CATEGORY_ATKCHANGE)
	e1:SetType(EFFECT_TYPE_ACTIVATE)
	e1:SetProperty(EFFECT_FLAG_CARD_TARGET)
	e1:SetCode(EVENT_FREE_CHAIN)
	e1:SetCondition(c515310214.condition)
	e1:SetTarget(c515310214.target)
	e1:SetOperation(c515310214.operation)
	c:RegisterEffect(c1)
end
function c515310214.condition(e)
	return Duel.GetTurnPlayer()~=e:GetHandler():GetControler()
end
function c515310214.filter(c)
	return c:IsFaceup() and c:IsSetCard(0xf35) and c:GetAttack()>0
end
function c515310214.target(e,tp,eg,ep,ev,re,r,rp,chk,chkc)
	if chkc then return chkc:IsType(TYPE_MONSTER) and chkc:IsControler(tp) and c515310214.filter(chkc) end
	if chk==0 then return Duel.IsExistingMatchingCard(c515310214.filter,tp,LOCATION_MZONE,0,1,nil) end
	Duel.Hint(HINT_SELECTMSG,tp,HINTMSG_ATTACK)
	local g=Duel.SelectTarget(tp,c515310214.filter,tp,LOCATION_MZONE,0,1,1,nil)
	Duel.SetOperationInfo(0,CATEGORY_ATKCHANGE,g,1,0,0)
end
function c515310214.operation(e,tp,eg,ep,ev,re,r,rp)
	local tc=Duel.GetFirstTarget()
	local e1=Effect.CreateEffect(e:GetHandler())
	e1:SetType(EFFECT_TYPE_SINGLE)
	e1:SetCode(EFFECT_SET_ATTACK_FINAL)
	e1:SetValue(tc:GetAttack()*2)
	e1:SetReset(RESET_EVENT+0x1fe0000+RESET_PHASE+PHASE_END)
	tc:RegisterEffect(e1)
end
